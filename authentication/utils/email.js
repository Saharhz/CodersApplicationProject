const sendVerificationEmail = async (to, token) => {
  const link = `http://localhost:5001/api/auth/verify-email?token=${token}`;
  console.log(`📧 Simulated email sent to ${to}: ${link}`);
};

export default sendVerificationEmail;
