import React, {useState} from 'react'
import {Table} from 'react-bootstrap';

import './css/AdminAccount.css'
// ----------------------------------------------

import {
    AccountContext
}   from '../../../contexts/AccountContext'

import { useContext, useEffect 
 } from 'react'

// ----------------------------------------------

export default function AdminAccount() {
// ---------------------------------

    const {getAccount, accountState: {accounts} } = useContext(AccountContext)
    useEffect(() =>{
        getAccount()
        // eslint-disable-nest-line react-hooks/exhaustive-deps
    },[]);
    console.log(accounts)

//----
    const [newAccount, setNewAccount] = useState({
        nameAccount:'',
        passAccount:'',
    
    })
    const {nameAccount,passAccount}=newAccount;
    const onChangeCreateAccountForm=event=>setNewAccount({
        ...newAccount,
        [event.target.name]:event.target.value,
        
    })

//----

    // const [data,setData]=useState(null);
    // const [show,showData]=useState(false);
    // function getData(val){
    //     setData(val.target.value)
    //     showData(false)
    //     console.warn(val.target.value)
    
    // }
    
// ---------------------------------
    return (
        <div className="wrapper">
            
           <div className="content-wrap">
{/*                
               <div>
                   {
                        show?
                    <h1>{data}</h1>
                        :null
                   }
               </div> */}

                <div className='flex-item' >
                    <p>Tài khoản:</p> 
                    <input type={'text' } id='hoten' placeholder='Tài khoản' value={nameAccount} name='nameAccount' onChange={onChangeCreateAccountForm}></input>
                 </div>
                 <div className='flex-item' >
                    <p>Mật khẩu: </p>
                    <input type={'password' } id='hoten' placeholder='Mật khẩu' value={passAccount} name='passAccount' onChange={onChangeCreateAccountForm} ></input>
                 </div>

                <div className='flex-btn'>
                    <input id='btn-them' type={'button'} value={'Thêm'} onChange={onChangeCreateAccountForm} ></input>
                    <input id='btn-sua' type={'button'} value={'Cập nhật'} ></input>
                    <input id='btn-xoa' type={'button'} value={'Xóa'} ></input>
                </div>

           </div>

           <Table  bordered hover size="sm">
           <thead >
                    <tr>
                        <th >STT</th>
                        <th >Id</th>
                        <th >Tài khoản</th>
                        <th >Mật khẩu</th>
                      
                        
                    </tr>
                </thead>
                <tbody>

                    {accounts.map((item, index) =>(
                            <tr key={item._id} > 
                                <td>
                                    { (index + 1 ) }
                                </td>
                                <td >
                                    { item._id }
                                </td>
                                <td >
                                    { item.nameAccount } 
                                </td>
                                <td >
                                    { item.passwordAccount }
                                </td>
                            
                            </tr> 
                    
                    ))}
{/* ------------------------------------------ */}
                </tbody>

           </Table>
        
        </div>
        
    

    )
    
}
