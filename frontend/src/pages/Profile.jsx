import React from 'react';
import Button from '@mui/material/Button';

const Profile = () => {
  // Sample user data
  const userData = {
    name: "Saman Kumara",
    email: "saman@gmail.com",
    bio: "A passionate and driven [Your Occupation/Field] with a keen interest in [Specific Interest or Skill]. Equipped with [Number] years of experience in [Your Field], I thrive in dynamic environments where I can apply my expertise to innovate and solve complex challenges. I am dedicated to continuous learning and growth, always seeking to expand my knowledge and skills to stay at the forefront of my field",
    avatarUrl: "https://via.placeholder.com/150", // Sample avatar URL
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-center">
          <img src={userData.avatarUrl} alt="User Avatar" className="w-32 h-32 object-cover rounded-full" />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
          <p className="text-gray-600 text-sm mt-1">{userData.email}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{userData.bio}</p>
        </div>
        <div className="flex justify-center space-x-4 pb-4">
          <Button variant="contained" color="primary">Edit</Button>
          <Button variant="contained" color="error">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
