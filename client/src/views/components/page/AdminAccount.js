import React, {useState} from 'react'
import {Table,Form,Button} from 'react-bootstrap';

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

    const {getAccount, createAccount, accountState: {accounts} } = useContext(AccountContext)
    useEffect(() =>{
        getAccount()
        // eslint-disable-nest-line react-hooks/exhaustive-deps
    },[]);
    console.log(accounts)

//----

    const [newAccount, setNewAccount] = useState({
        nameAccount:'',
        passwordAccount:'',
    
    })
    const {nameAccount,passwordAccount}=newAccount;
    const onChangeCreateAccountForm=event=>setNewAccount({
        ...newAccount,
        [event.target.name]:event.target.value,
        
    })

    const onSubmit = async event =>{
        event.preventDefault();
       await createAccount(newAccount);
        

    }

    return (
        <div className="container">
            
          
           <Form.Group style={{margin:'20px'}}>
                <Form.Text style={{fontSize:'15px'}}>Tài khoản: </Form.Text>
                <Form.Control style={{margin:'5px'}} type='text' placeholder='Tài khoản' value={nameAccount} name='nameAccount' onChange={onChangeCreateAccountForm} required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}} className="mb-3" >
                    <Form.Text style={{fontSize:'15px'}}>Mật kHẩu: </Form.Text>
                    <Form.Control type='text' style={{margin:'5px'}} placeholder='Mật khẩu' value={passwordAccount} name='passwordAccount' onChange={onChangeCreateAccountForm} required/>
                   
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSubmit} style={{margin:'20px'}}>
                    Thêm
                </Button>
                <Button variant="primary" type="submit"  style={{margin:'20px'}}>
                    Sửa
                </Button>
                <Button variant="primary" type="submit"  style={{margin:'20px'}} >
                    Xóa
                </Button>

           

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

                </tbody>

           </Table>
        
        </div>
        
    

    )
    
}
