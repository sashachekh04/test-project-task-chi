import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "tech-test";

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/tasks").subscribe();
  }
}
