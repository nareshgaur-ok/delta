import axios from "axios";
const googleLoginApi = async (response) => {
  try {
    // ✅ Step 1: Extract Google ID Token from response
    const idToken = response.credential;
    if (!idToken) {
      throw new Error("No Google ID token found in response");
    }
    
    // ✅ Step 2: Send the token to your backend
     const resp = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/google-login`, {
      token: idToken,
    });
    console.log("userapi res:", resp);
    // ✅ Step 3: Check server response
    if (resp.status === 200 && resp.data?.token && resp.data?.user) {
      console.log("Google Login Successful:", resp.data.user);
      console.log("Backend JWT Token:", resp.data.token);

      // ✅ Step 5: Return success result
      return { success: true, user: resp.data.user, token: resp.data.token };
    } else {
      throw new Error("Invalid server response");
    }
  } catch (err) {
    console.error(err);
    console.error(`Google login failed ❌: ${err.message}`);
    alert("Google login failed ❌");
  }
};

export default googleLoginApi;
