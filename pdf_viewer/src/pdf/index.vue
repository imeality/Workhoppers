<template>
  <div>
  <router-link to="/download"><button disabled>Download pdf</button></router-link>
   <!-- <button @click="download">Download results</button> -->
   <button @click="ShowPDF">show the pdf</button><br><br>  
     <iframe class="PDF" id="fill" width="600px" height="500px"></iframe><br>
     <form  @submit.prevent="submit">
       Save PDF Name:<input type="text" id="savename">
       <input type="submit" id="submitbutton" value="Save" disabled >
       </form>
     
  </div>
</template>
<script>
import * as jsPDF from 'jspdf';

 export default{
   data()
   {
     return{Name:'',Mobile:'',
     new:'Hello world',
      save:'',
      doc:''
     }
   },
methods:{
// download(){

//  jsPDF.getDocument({ url: 'http://localhost:8080/vuejs_tutorial.pdf' }).then(function(pdf_doc) {
//     // pdf_doc is a PDFDocumentProxy object
//  });


//     new jsPDF();
      
//     xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2); 
// doc.text(25,250,'hello');

//        doc.text(40, 40,'${new}');
//        doc.addPage();
//        doc.text(20, 20, 'Hi again this I page two');
//        document.getElementById("PDF").src = doc.output('./vuejs_tutorial.pdf');
//         document.createElement("BUTTON");
//         document.body.appendChild(btn);
//        doc.save('test.pdf');
       
       
//        },
       
       
      ShowPDF(){ 
    
       this.doc =new jsPDF();
			//var doc = new jsPDF('landscape');//Horizontal
			
			this.doc.setProperties({//Set the document properties
				title: 'Title',
				subject: 'This is the subject',		
				author: 'Dragon',
				keywords: 'javascript, web 2.0, ajax',
				creator: 'MEEE'
			});
	
			this.doc.setTextColor(0,255,0);
			this.doc.setFontSize(22);
			this.doc.setFont("times");
			this.doc.setFontType("italic");
			this.doc.text(20, 20, 'Hello world!');//Add text
			
			this.doc.setTextColor(255,0,0);
			this.doc.setFontSize(16);
			this.doc.setFont("helvetica");
			this.doc.setFontType("bold");
			this.doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
			// doc.addImage(imgData, 'png', 15, 40, 180, 160);
			this.doc.addPage();//Add page
			
			this.doc.setLineWidth(1);
			this.doc.setDrawColor(0,255,0);
			this.doc.setFillColor(255,0,0);
			this.doc.line(60, 20, 115, 60);
			this.doc.rect(100, 50, 20, 30); 
			this.doc.ellipse(20, 20, 20, 10, 'F');
			this.doc.circle(120, 20, 20, 'FD');
			this.doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
      document.getElementById("fill").src = this.doc.output('datauristring');//Display in iframe
     
     document.getElementById("submitbutton").disabled = false;
    },

      CustomAnnotation()
      {
         this.doc.line(60, 20, 115, 60);
			this.doc.rect(100, 50, 20, 30); 
			this.doc.ellipse(20, 20, 20, 10, 'F');
			this.doc.circle(120, 20, 20, 'FD');
			this.doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
      },

    submit()
       {
         this.ShowPDF()
         var filename=document.getElementById('savename').value;
         
         this.doc.save(filename+'.pdf');
         
         },
    
       }
  }
 
</script>
<style>
#generic{
 display: none;
 pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
}
</style>
<!--template>
  <pdf src="./content.js" :page="1">
    <template slot="loading">
      loading content here...
    </template>
  </pdf>
</template>
<script>
// import pdf from 'pdfvuer'

// export default {
//   components: {
//     pdf
//   }
// }
// </script !-->

