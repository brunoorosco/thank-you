export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const profileUrl = searchParams.get('profileUrl');
  
    if (!profileUrl) {
      return new Response(JSON.stringify({ error: 'Profile URL is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    // Simulação: Substitua por integração real com LinkedIn API.
    const photoUrl = 'https://via.placeholder.com/150';
    return new Response(JSON.stringify({ photoUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  