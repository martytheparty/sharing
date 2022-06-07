import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stagedFilesCount = 0;
  stagedFiles: string[] = [];

  constructor(private httpClient: HttpClient){
    this.httpClient.get('../api/api.php').subscribe(
      (data: any): void => {
        console.log(data);
        this.stagedFilesCount = data.length - 2;
        this.stagedFiles = data.filter((fileName: string) => fileName !== '.' && fileName !== '..');


      }
    );
  }



}
