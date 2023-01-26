/* eslint-disable max-len */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {gql, GraphQLClient} from "graphql-request";

admin.initializeApp();
const config = functions.config();
const env = config["hasura"];

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const anonymous = user.providerData.length ? false : true;
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user", "anonymous"],
      "x-hasura-role": anonymous ? "anonymous" : "user",
      "x-hasura-user-id": user.uid,
    },
  };

  try {
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    await admin.firestore().collection("user_meta").doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });

    const createUserQuery = gql`
      mutation createUser(
        $id: String!
        $anonymous: Boolean!
        $photo_url: String!
        $user_name: String!
      ) {
        insert_users_one(
          object: { anonymous: $anonymous, photo_url: $photo_url, id: $id,user_name: $user_name}
        ) {
          id
        }
      }
    `;

    const client = new GraphQLClient(env.url, {
      headers: {
        "x-hasura-admin-secret": env.admin_secret,
      },
    });

    await client.request(createUserQuery, {
      id: user.uid,
      anonymous,
      photo_url: user.photoURL,
      user_name: user.displayName??"anonymous",
    });
  } catch (e) {
    console.log(e);
  }
});
