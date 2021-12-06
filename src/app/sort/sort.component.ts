import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.scss"],
})
export class SortComponent implements OnInit {
  public word: string;
  public list: string[];
  public listaDosJaSorteados: string[];
  public finish: boolean;

  constructor() {}

  ngOnInit() {
    this.word = "...";
    this.list = [
      "cachorro",
      "macaco",
      "gato",
      "urso",
      "ovelha",
      "leão",
      "cobra",
      "pato",
      "baleia",
      "abelha",
      "borboleta",
      "elefante",
      "girafa",
      "touro",
    ];
    this.listaDosJaSorteados = [];
    this.finish = false;
  }

  public sort() {
    if (this.list.length > 0) {
      const random = Math.floor(Math.random() * this.list.length);
      this.word = this.list[random];
    } else {
      this.word = "Acaboooou!";
      this.finish = true;
    }

    this.adicionarPalavraSorteadaNaListaDasQueJaForam();
    this.removerPalavraSorteada();
  }

  private adicionarPalavraSorteadaNaListaDasQueJaForam() {
    if (!this.finish) {
      this.listaDosJaSorteados.push(this.word);
    }
  }

  private removerPalavraSorteada() {
    const index: number = this.list.indexOf(this.word);
    this.list.splice(index, 1);
  }
}
