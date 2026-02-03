const Create = () => {
  return (
    <div>
          {/* for mobile view  & Laptop View*/}
      <div className="min-h-screen  p-4 md:p-10 ">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">Create Recipe</h1>
        <form className="bg-[#B5B5A1] rounded-xl shadow p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">

        <div>
        <label className="block text-sm font-medium mb-1">
        URL 
        </label>
        <input
        className="w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none"
        type="url" 
        placeholder="https://example.com/image.jpg"/>
        </div>
       
       <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">
          Recipe Name
        </label>       
         <input 
         type="text" 
         className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-1 outline-none"
         placeholder="Recipe Name"/>
       </div>
       
        <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">
        Description
        </label>
        <textarea
        className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-1 outline-none" 
        rows={2}
        placeholder="Recipe Details">
        </textarea>
        </div>
       
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Ingredients
          </label>
          <textarea 
          className="w-full border rounded-xl px-3 py-2 resize-none focus:ring-1 outline-none"
          rows={4}
          placeholder="Ingredients">

          </textarea>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Chef Name
          </label>
          <textarea 
          className="w-full border rounded-xl px-3 py-2 resize-none focus:ring-1 outline-none"
          placeholder="Chef Name">
          </textarea>
        </div>
      
        <button>Add Recipe</button>
        
        </form>
      </div>
        
    </div>
  )
}

export default Create