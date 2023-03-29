import axios from 'axios';
export async function checkUserContact(jwtAuth) {
  const contactNumber = localStorage.getItem('contactNumber');
  if (!jwtAuth || !contactNumber) {
    return false;
  }
  try {
    const response = await axios.get(`http://localhost:9090/user/contact/${contactNumber}`, {
      headers: { Authorization: `Bearer ${jwtAuth}` },
    });
    if (response.status === 200 && response.data) {
      return true;
    } else {
      console.error('Error retrieving contact details:', response);
      return false;
    }
  } catch (error) {
    console.error('Error retrieving contact details:', error);
    return false;
  }
}