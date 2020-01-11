import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-playerstatistics",
  templateUrl: "./playerstatistics.component.html",
  styleUrls: ["./playerstatistics.component.css"]
})
export class PlayerstatisticsComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=WVP9XxK4c0bWio7EEYCBqt5RS3k2&pid=";

  constructor(private http: HttpClient) {}

  playerInfo;

  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl}${pid}`).subscribe(user => {
      //console.log(user);
      this.playerInfo = user;
    });
  }

  ngOnInit() {}
}
