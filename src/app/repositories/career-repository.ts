export const CareerRepository = {
  getCertifications: async () => {
    const response = await fetch(`${process.env.REACT_APP_API_CAREER_URL}/education`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};
