
export async function Blog() {
  const response = fetch('http://localhost:4000/blog');
  console.log('NUGH');
  return (await response).json();
} 

export default function Home() {
  const blog = Blog();
  return (
      <div className='bg-pink-500'> 
        <h1>Mahlzeit im Wirtshaus zum Warzenhof</h1>
        <div className='bg-purple-500'>
          <p>
            Willkommen beim Swingerwirt Alfons! <br/> Hier gibts jeden Tag Wurst ins Maul!<br/>
          </p>
        </div>
      </div>
    
  )
}
