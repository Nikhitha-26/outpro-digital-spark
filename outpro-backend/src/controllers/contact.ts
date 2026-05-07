import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, companyName, serviceInterestedIn, budgetRange, message } = req.body;

    // 1. Validate data
    if (!fullName || !email || !message) {
      res.status(400).json({ error: 'Please provide all required fields.' });
      return;
    }

    // 2. Insert data into Supabase 'contacts' table
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          full_name: fullName,
          email: email,
          company_name: companyName,
          service: serviceInterestedIn,
          budget: budgetRange,
          message: message
        }
      ]);

    // 3. Handle database errors
    if (error) {
      console.error('Supabase Error:', error.message);
      res.status(500).json({ error: 'Failed to save your message. Please try again later.' });
      return;
    }

    // 4. Send success response
    console.log(`✅ New lead saved from: ${fullName}`);
    res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you shortly.' 
    });

  } catch (error) {
    console.error('Error in submitContactForm:', error);
    res.status(500).json({ error: 'Internal Server Error. Please try again later.' });
  }
};