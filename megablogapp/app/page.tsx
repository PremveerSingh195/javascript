

export default function Home() {
  const appwriteurl =  process.env.APPWRITE_URL
  console.log(`appwrite url - code : ${appwriteurl}`);
  
  
  return (
   <div className="text-center">
    <h1>Mega blog app testing</h1>
   </div>
  );
}
