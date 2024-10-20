export const jsonwebtoken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // determine the cookie name based on the user's role
  let cookieName;

  if (user.roles === "Admin") {
    cookieName = "adminToken";
  } else if (user.roles === "Doctor") {
    cookieName = "doctorToken";
  } else if (user.roles === "Patient") {
    cookieName = "patientToken";
  }
  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
