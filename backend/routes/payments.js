router.post('/process', async (req, res) => {
  const { amount, method, user } = req.body;
  
  // AI fraud check
  const fraudScore = await checkForFraud(user, amount);
  
  if (fraudScore > 0.7) {
    return res.status(400).json({ error: "Potential fraud detected" });
  }

  // Process payment
  const result = await mockPaymentProcessor(amount, method);
  
  res.json({
    success: true,
    transactionId: result.id
  });
});
