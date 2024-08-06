import React from 'react'

export default function Form() {
  return (
    <div><center>
      <form action="">
        <label htmlFor="">first name
            <input type="text" placeholder='Name'/>
        </label><br /><br /><br />
        <label htmlFor="">second name 
           <input type="text" placeholder='second name'/>
        </label><br /><br /><br />
        <label htmlFor="">Reg.no 
           <input type="number" placeholder='Reg.no'/>
        </label><br /><br /><br />
        <label htmlFor="">section 
           <input type="text" placeholder='section'/>
        </label><br /><br /><br />
        <label htmlFor="">Department 
           <input type="text" placeholder='department'/>
        </label><br /><br /><br />
        <label htmlFor="">Your CNIC
           <input type="number" placeholder='your CNIC'/>
        </label>
      </form>
      </center>
    </div>
  )
}
