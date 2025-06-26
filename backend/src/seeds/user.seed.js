import { config } from 'dotenv';
import { connectDB } from '../lib/db.js';
import User from '../models/user.model.js';

config();

const seedUsers = [
  // Female Users
  {
    email: 'Kiran_kaur@example.com',
    fullName: 'Kiran Kaur',
    password: '123456',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    email: 'Sita_Ram@gmail.com',
    fullName: 'Sita Mata',
    password: '654321',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    email: 'sonia.devis@example.com',
    fullName: 'Sonia Devi',
    password: 'qwertyuiop',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    email: 'Meena_india@gmail.com',
    fullName: 'Meena Kumari',
    password: 'asdfghjkl',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    email: 'Ritika_rani@gmail.com',
    fullName: 'Ritika Rani',
    password: 'zxcvbnm',
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    email: 'mia.johnson@example.com',
    fullName: 'Mia Johnson',
    password: '9896099318',
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    email: 'Parmeshwari_devi@example.com',
    fullName: 'Parmeshwari Devi',
    password: '8168897843',
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    email: 'Anju.bala@example.com',
    fullName: 'Anju Bala',
    password: 'qwerty987',
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
  },

  // Male Users
  {
    email: 'Aman_kumar@gmail.com',
    fullName: 'Aman Kumar',
    password: '9588149180',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    email: 'rohit5singh@gmail.com',
    fullName: 'Rohit Singh',
    password: '11223344',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    email: 'Ramesh_Sharma@gmail.com ',
    fullName: 'Ramesh Sharma',
    password: '55667788',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    email: 'Ankur_shah@gmail.com',
    fullName: 'Ankur Shah',
    password: '135792468',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    email: 'henry.jackson@example.com',
    fullName: 'Henry Jackson',
    password: '123456',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    email: 'sahil_thakur@gmail.com',
    fullName: 'Sahil Thakur',
    password: '99999998',
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    email: 'Rohit_david@example.com',
    fullName: 'Rohit David',
    password: 'asdfghjkkl',
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Call the function
seedDatabase();
