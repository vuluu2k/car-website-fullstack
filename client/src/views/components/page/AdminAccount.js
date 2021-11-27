import React from 'react'
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

// ---------------------------------
    return (
        <div className="wrapper">
            
           <div className="content-wrap">
               
                <div className='flex-item' >
                    <p>Tài khoản:</p> 
                    <input type={'text' } id='hoten' placeholder='Tài khoản' ></input>
                 </div>
                 <div className='flex-item' >
                    <p>Mật khẩu: </p>
                    <input type={'password' } id='hoten' placeholder='Mật khẩu' ></input>
                 </div>

                 {/* <div className='flex-item' >
                    <p>Họ tên:</p> 
                    <input type={'text' } id='hoten' placeholder='Họ tên' ></input>
                 </div> */}
                 {/* <div className='flex-item' >
                    <p>Số điện thoại: </p>
                    <input type={'text' } id='hoten' placeholder='Số điện thoại' ></input>
                 </div> */}

                <div className='flex-btn'>
                    <input id='btn-them' type={'button'} value={'Thêm'} ></input>
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
                        {/* <th >Họ tên</th>
                        <th >Số điện thoại</th> */}
                        
                    </tr>
                </thead>
                <tbody>

                    {accounts.map((item, index) =>(
                            <tr key={item._id}> 
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
