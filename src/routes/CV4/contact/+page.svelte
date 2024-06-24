<script>
    const contactInfo = {
      email: 'your-email@example.com',
      phone: '+695476557',
      address: '8 Avenue de la Liberté, Charenton-le-Pont'
    };
  </script>
  
  <div class="bg-gray-800 text-white p-4 min-h-screen">
    <h1 class="text-3xl text-center mb-6">Contact Me</h1>
    <div class="space-y-4 text-center">
      <p><strong>Email:</strong> {contactInfo.email}</p>
      <p><strong>Phone:</strong> {contactInfo.phone}</p>
      <p><strong>Address:</strong> {contactInfo.address}</p>
    </div>
  </div>