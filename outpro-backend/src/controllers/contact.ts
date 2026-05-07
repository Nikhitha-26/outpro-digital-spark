import { Request, Response } from 'express';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extract the data sent from the React frontend
    const { fullName, email, companyName, serviceInterestedIn, budgetRange, message } = req.body;

    // Validate that required fields are present
    if (!fullName || !email || !message) {
      res.status(400).json({ error: 'Please provide all required fields.' });
      return;
    }

    // For now, just log it to the VS Code terminal.
    // LATER: We will replace this with MongoDB saving logic.
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${companyName || 'N/A'}`);
    console.log(`Service: ${serviceInterestedIn}`);
    console.log(`Budget: ${budgetRange}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // Send a success response back to the React frontend
    res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you shortly.' 
    });

  } catch (error) {
    console.error('Error in submitContactForm:', error);
    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};