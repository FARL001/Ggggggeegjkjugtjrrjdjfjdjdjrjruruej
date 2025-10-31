
export default function Home() {
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1 style={{color:"#FFD700"}}>مرحبا بك في لوحة تحكم البوت</h1>
      <a href="/api/auth/login" style={{padding:"10px 20px", backgroundColor:"#FFD700", color:"#111", borderRadius:"8px", textDecoration:"none"}}>
        تسجيل الدخول بواسطة Discord
      </a>
    </div>
  );
}
