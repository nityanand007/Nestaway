import React, { useState, useEffect } from 'react';
import '../styles/form.css'
const LoginForm = () => {
    const [modalVisible, setModalVisible] = useState(true);

    useEffect(() => {
        const openModal = () => {
            setModalVisible(true);
        };
        openModal();
        // Clean-up function to close the modal when the component unmounts
        return () => {
            setModalVisible(false);
        };
    }, []);

    const closeModal = () => {
        setModalVisible(false);
    };
    const [formData, setFormData] = useState({
        username: '',
        contactNumber: '',
        date: '',
    });
    const [validationMessages, setValidationMessages] = useState({
        username: '',
        contactNumber: '',
        date: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newValidationMessages = { ...validationMessages };

        // Validate username
        if (formData.username.trim() === '') {
            isValid = false;
            newValidationMessages.username = 'Username is required';
        } else {
            newValidationMessages.username = '';
        }

        // Validate contact number
        const contactNumberRegex = /^\d{10}$/;
        if (!contactNumberRegex.test(formData.contactNumber)) {
            isValid = false;
            newValidationMessages.contactNumber = 'Invalid contact number';
        } else {
            newValidationMessages.contactNumber = '';
        }

        // Validate date
        if (formData.date.trim() === '') {
            isValid = false;
            newValidationMessages.date = 'Date is required';
        } else {
            newValidationMessages.date = '';
        }
        setValidationMessages(newValidationMessages);

        // If the form is valid, show success message
        if (isValid) {
            setSuccessMessage('Form successfully submitted!');
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2 className="login">Login Form</h2>
                        <form onSubmit={handleSubmit} style={{
                            width: "190px",
                            height: "290px"
                        }}>
                            <div className="form">
                                <label>Username :</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="input"
                                    placeholder="Enter Username"
                                />
                                <span style={{ color: 'red', fontSize: '14px' }}>{validationMessages.username}</span>
                            </div>
                            <div className="form">
                                <label>Contact Number :</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className="input"
                                    placeholder="10 Digit Mobile Number"
                                />
                                <span style={{ color: 'red', fontSize: '14px' }}>{validationMessages.contactNumber}</span>
                            </div>
                            <div className="form">
                                <label>Date :</label>
                                <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="input"
                                    placeholder="DD/MM/YYYY"
                                />
                                <span style={{ color: 'red', fontSize: '14px' }}>{validationMessages.date}</span>
                            </div>
                            <button className="view_detail" type="submit">Submit</button>
                        </form>
                        {successMessage && <div style={{
                            color: 'green', fontSize: '20px',
                            textAlign: 'center',
                            fontWeight: 600,
                        }}>{successMessage}</div>}
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginForm;
