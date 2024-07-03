import React, { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

const EditUserDetailsForm: React.FC = () => {
  const [name, setName] = useState('Olivia Rhye');
  const [role, setRole] = useState('Product Designer');
  const [email, setEmail] = useState('olivia@untitledui.com');

  const handleConfirm = () => {
    // Handle confirm action
    console.log({ name, role, email });
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancel');
  };

  return (
    <div>
      <h2 className="text-lg font-medium mb-6">Edit User Details</h2>
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        label="User Role"
        value={role}
        options={['Product Designer', 'Product Manager', 'Frontend Developer', 'Backend Developer']}
        onChange={(e) => setRole(e)}
      />
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex justify-between mt-6 gap-4">
        <Button classes='flex-grow' text="Cancel" onClick={handleCancel} variant="secondary" />
        <Button classes='flex-grow' text="Confirm" onClick={handleConfirm} />
      </div>
    </div>
  );
};

export default EditUserDetailsForm;
