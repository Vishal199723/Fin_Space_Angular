import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-test-convertor-file',
  templateUrl: './test-convertor-file.component.html',
  styleUrls: ['./test-convertor-file.component.css']
})
export class TestConvertorFileComponent implements OnInit {
  name:any
  name1: string;
  expression:boolean=false
  constructor(private userservice:UserDetailsService) { 
    this.name="kavita"
    this.name1="Rajeshwari"
  }

  ngOnInit() {
    var node = document.getElementById('test');
    var aa=node.innerHTML
   
  }
  submit(){
    this.expression=true;
    var node = document.getElementById('test');
    var maincontent=node.innerHTML
    var attribute=node.attributes[0].nodeName+ '=""';
    if(!attribute.includes('_')){
      attribute= "_" + attribute 
    }
  
    if(maincontent.includes(attribute)){
      var spf = maincontent.split(attribute);
      var final = spf.join("");
      console.log(final);
  }
    var data={
      htmlString:final
    }
    this.userservice.SavePdf(data).subscribe((data:any)=>{

    })
  }
}
