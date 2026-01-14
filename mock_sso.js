const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ------------------ STEP 1: Redirect ------------------
console.log("🔄 Redirecting to Identity Provider...");

// ------------------ STEP 2: IdP Login ------------------
rl.question("Enter username: ", (username) => {
  rl.question("Enter password: ", (password) => {

    // We pretend login is always valid
    console.log("✅ Login successful");

    // ------------------ STEP 3: Authorization Code ------------------
    const AUTH_CODE = "XYZ123";
    console.log("Auth Code:", AUTH_CODE);

    // ------------------ STEP 4: Token Exchange ------------------
    rl.question("Enter auth code to exchange for token: ", (code) => {

      if (code !== AUTH_CODE) {
        console.log("❌ Invalid Authorization Code");
        rl.close();
        return;
      }

      const tokens = {
        id_token: "header.payload.signature",
        access_token: "access.payload.signature"
      };

      console.log("🎫 Tokens issued:");
      console.log(tokens);

      // ------------------ STEP 5: Token Verification ------------------
      console.log("\n🔍 Verifying Token...");

      const idTokenParts = tokens.id_token.split(".");

      if (
        tokens.id_token &&
        idTokenParts.length === 3 &&
        tokens.access_token
      ) {
        console.log("✅ Token Verified");
        console.log("Expected claims found");
      } else {
        console.log("❌ Invalid Token");
      }

      rl.close();
    });
  });
});
