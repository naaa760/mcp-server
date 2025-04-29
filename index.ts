import { KiteConnect } from "kiteconnect";

const apiKey = "kbyvnwxwh8uou3im";
const apiSecret = "5jwa0psompa54k2m5zkopqitx1lhn67i";
const requestToken = "your_request_token";

const kc = new KiteConnect({ api_key: apiKey });

async function init() {
  try {
    await generateSession();
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    kc.setAccessToken(response.access_token);
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();
