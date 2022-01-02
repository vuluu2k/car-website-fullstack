import React, {useState, useContext, useEffect} from 'react'
import {Table,Form,Button} from 'react-bootstrap';
import {ConfirmContext} from '../../../contexts/ConfirmContext';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import './css/AdminAccount.css'
import {
    AccountContext
}   from '../../../contexts/AccountContext'

export default function AdminAccount() {

    const {getAccount, createAccount, deleteAccount, accountState: {accounts} } = useContext(AccountContext)
    
    
    useEffect(() =>{
        getAccount()
        // eslint-disable-nest-line react-hooks/exhaustive-deps
    },[]);
    console.log(accounts)

    return (
        <div className="container">
            
          
           <Form.Group style={{margin:'20px'}}>
                <Form.Text style={{fontSize:'15px'}}>Tài khoản: </Form.Text>
                <Form.Control style={{margin:'5px'}} type='text' placeholder='Tài khoản'  required/>
                </Form.Group>
                <Form.Group style={{margin:'20px'}} className="mb-3" >
                    <Form.Text style={{fontSize:'15px'}}>Mật Khẩu: </Form.Text>
                    <Form.Control type='text' style={{margin:'5px'}} placeholder='Mật khẩu' required/>
                   
                </Form.Group>

                <Button variant="primary" type="submit" style={{margin:'20px'}}>
                    Thêm
                </Button>

           <Table  bordered hover size="sm" >
           <thead >
                    <tr>
                        <th >STT</th>
                        <th >Id</th>
                        <th >Tài khoản</th>
                        <th >Mật khẩu</th>
                        <th></th>
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
                            <td>
                                { item.passwordAccount }
                            </td>
                            <td>
                                <center>
                                <div className="d-flex justify-content-around align-items-center">
                                    
                                    {/* <Button variant="outline-primary" size="sm" ><i className="fas fa-pen"></i></Button> */}
                                    
                                    <Button  variant="outline-primary" size="sm" ><i className="fas fa-trash"></i></Button>
                                </div>
                                </center>
                            </td>
                        </tr> 
                    
                    ))}

                </tbody>

           </Table>
          
        </div>
        
    )
}
