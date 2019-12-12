import React, {Component} from 'react';
import {render} from 'react-dom';
import toastr from 'toastr';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import MaskedInput from 'react-maskedinput';

var grid=[];
export default class Form extends Component {
  constructor(props){
       super(props);
       this.state = {
           fullName:'',
           phno:'',
           addLine1:'',
           addLine2:'',
           pincode:'',
           email:'',
           item:[],
           updated:[],
           notValidUserName:'',
           notValidEmail:'',
           notValidAddress:''
       }
    }
    dovalidate(fieldName,fieldValue)
    {
      debugger;
      switch (fieldName) {
        case 'name':
          if(fieldValue=="")
          {
            toastr.error("Please enter User Name");
          }
          break;
        case 'phno':
        if(fieldValue=="")
        {
          toastr.error("Please enter PhoneNumber");
        }
        break;
        case 'addLine1':
        if(fieldValue=="")
        {
          toastr.error("Please enter Address Line1");
        }
        break;
        case 'addLine2':
        if(fieldValue=="")
        {
          toastr.error("Please enter Address Line2");
        }
        break;
        case 'pincode':
        if(fieldValue=="")
        {
          toastr.error("Please enter Pincode");
        }
        break;
        case 'email':
        if(fieldValue=="")
        {
          toastr.error("Please enter Email ID");
        }
        break;
        default:
        break;
      }
    }
    validEmail(e){
      debugger;
      var validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      this.state.notValidEmail = e.target.value.match(validEmail)?false:true;
      if(this.state.notValidEmail==true)
      {
        toastr.error("Please enter valid Email ID");
      }
    }
    validUserName(e)
    {
      debugger;
      var alphabets = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
      this.state.notValidUserName = e.target.value.match(alphabets)?false:true;
      if( this.state.notValidUserName == true)
      {
        toastr.error("Please enter valid User Name");
      }
    }
    validPhoneNumber(e)
    {
      debugger;
      var phnolength = e.target.value.replace(/[\s-_+]/g, "").length;
      if(phnolength < 12)
      {
        toastr.error("Please enter valid Phone Number");
      }
    }
    validAddress(e){
      var address = /^[a-zA-Z0-9\s,.'-]{3,}$/;
      this.state.notValidAddress = e.target.value.match(address)?false:true;
      if(this.state.notValidAddress == true)
      {
        toastr.error("Please enter valid Address");
      }
    }
    validPincode(e)
    {
      debugger;
      var pincodelength = e.target.value.replace(/[_]/g, "").length;
      if(pincodelength < 5)
      {
        toastr.error("Please enter Pincode");
      }
    }
    handleChange(e)
    {
      debugger;
      var type = e.target.id;
      var value = e.target.value;
      this.dovalidate(type,value);
      if(e.target.id=="name")
      {
        this.setState({fullName:e.target.value});
      }
      else if (e.target.id=="phno") {
        this.setState({phno:e.target.value});
        }
      else if (e.target.id=="addLine1") {
        this.setState({addLine1:e.target.value});
      }
      else if (e.target.id=="addLine2") {
        this.setState({addLine2:e.target.value});
      }
      else if (e.target.id=="pincode") {
        this.setState({pincode:e.target.value});
      }
      else{
        this.setState({email:e.target.value});
      }
    }
    Submit()
    {
      if(this.state.notValidUserName == false&&this.state.phno.length==18&&this.state.addLine1&&this.state.addLine2&&this.state.pincode.length==6&&this.state.notValidEmail == false)
      {
      var obj={
        fullName:this.state.fullName,
        phoneNo:this.state.phno,
        addLine1:this.state.addLine1,
        addLine2:this.state.addLine2,
        pincode:this.state.pincode,
        email:this.state.email
      };
      grid.push(obj);
      this.setState({updated:grid});
      this.state.fullName='';
      this.state.phno='';
      this.state.addLine1='';
      this.state.addLine2='';
      this.state.pincode='';
      this.state.email='';
    }
    else {
      toastr.error("Please Enter Valid Details");
    }
  }
  render() {
    debugger;
    const options = {
      page: 2,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      paginationPosition: 'bottom'  // default is bottom, top and both is all available
    };
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    return (
      <div>
        <div className = "container">
          <div className = "col-xs-6 float-l">
            <div className="panel panel-info mar-t-10px">
              <div className="panel-heading">Contact Form</div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label className="col-xs-3">FullName:</label>
                      <input type="text" id="name" className={this.state.notValidUserName?"error":""} placeholder="FirstName LastName" value={this.state.fullName} onChange={this.handleChange.bind(this)} onBlur={this.validUserName.bind(this)}/>
                    </div>
                    <div className="form-group">
                      <label className="col-xs-3">PhoneNumber:</label>
                      <MaskedInput mask="+ 11 - 11111111111"  size="20" id="phno"  value={this.state.phno} onChange={this.handleChange.bind(this)} onBlur={this.validPhoneNumber.bind(this)}/>
                    </div>
                    <div className="form-group">
                      <label className="col-xs-3">Address</label>
                      <input type="text" id="addLine1" placeholder="Enter Address Line1" value={this.state.addLine1} onChange={this.handleChange.bind(this)} onBlur={this.validAddress.bind(this)}/><br/>
                      <span className="col-xs-3"/><input type="text"  id="addLine2" placeholder="Enter Address Line2" value={this.state.addLine2} onChange={this.handleChange.bind(this)} onBlur={this.validAddress.bind(this)}/><br/>
                      <span className="col-xs-3"/><MaskedInput mask="111111" size="20"  id="pincode" placeholder="Enter pincode" value={this.state.pincode} minLength={6} maxLength={6} onChange={this.handleChange.bind(this)} onBlur={this.validPincode.bind(this)}/>
                    </div>
                    <div className="form-group">
                      <label className="col-xs-3">Email:</label>
                      <input type="email" id="email" className={this.state.notValidEmail?"error":""} placeholder="Enter email" value={this.state.email} onChange={this.handleChange.bind(this)} onBlur={this.validEmail.bind(this)}/>
                    </div>
                    <button type="button" className="btn btn-info" onClick = {this.Submit.bind(this)}>Submit</button>
                  </form>
                </div>
              </div>
          </div>
          <div className = "col-xs-12">
            <div className="panel panel-info mar-t-10px">
              <div className="panel-heading">Display Contact FormData</div>
                <div className="panel-body">
                  <BootstrapTable data={this.state.updated} pagination={ true } options={ options }>
                    <TableHeaderColumn dataField='fullName' isKey={ true } filter={ { type: 'TextFilter'} }>FullName</TableHeaderColumn>
                    <TableHeaderColumn dataField='phoneNo' filter={ { type: 'TextFilter'} }>Phone Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='addLine1' filter={ { type: 'TextFilter'} }>Address Line1</TableHeaderColumn>
                    <TableHeaderColumn dataField='addLine2' filter={ { type: 'TextFilter'} }>Address Line2</TableHeaderColumn>
                    <TableHeaderColumn dataField='pincode' filter={ { type: 'TextFilter'} }>Pincode</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' filter={ { type: 'TextFilter'} }>Email Id</TableHeaderColumn>
                  </BootstrapTable>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
