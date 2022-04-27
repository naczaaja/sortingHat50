import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sortingHat50';
  firstName: any = '';
  lastName: any = '';

  sortingHouse() {
    let studentName: any[] = [];

    let gryf = 0;
    let huff = 0;
    let raven = 0;
    let slyt = 0;
    let charName: any[] = [];

    for (let i = 1; i <= 50; i++) {
      let name = prompt(`โปรดกรอกชื่อจริงคนที่` + i + '(ภาษาอังกฤษ)');
      const domMath = Math.floor(Math.random() * 10);
      studentName[i] = name;
      charName = studentName[i].charAt();

      if (domMath <= 2) {
        gryf = gryf + 1;
        alert('คุณได้อยู้บ้าน กริฟฟินดอร์')
      } else if (domMath <= 4 && domMath > 2) {
        huff = huff + 1;
        alert('คุณได้อยู้บ้าน ฮัฟเฟิลพัฟ')
      } else if (domMath <= 6 && domMath > 4) {
        slyt = slyt + 1;
        alert('คุณได้อยู้บ้าน เรเวนคลอ')
      } else if (domMath <= 9 && domMath > 6) {
        raven = raven + 1;
        alert('คุณได้อยู้บ้าน สลิธีรีน')
      }
    }

    document.getElementById('gryfId')!.innerHTML = gryf.toString();
    document.getElementById('huffId')!.innerHTML = huff.toString();
    document.getElementById('ravenId')!.innerHTML = raven.toString();
    document.getElementById('slytId')!.innerHTML = slyt.toString();

    /* console.log(gryf);
    console.log(huff);
    console.log(raven);
    console.log(slyt);*/
  }
}
