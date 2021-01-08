import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  public word: string;
  public list: string[];
  public listaDosJaSorteados: string[];

  constructor() { }

  ngOnInit() {
    this.word = '...';
    this.list = ['combo de drink', 'curupira', 'açúcar', 'divo', 'kombi', 'coleção de mouse', 'tribunal de E.T.', 'delete sem where',
    'little popcorn', 'BP impostora','sofá', 'panela', 'trovão','dormir', 'encomenda', 'Moto', 'exorcista', 'Reino animal', 'Bruno e Marrone',
    'Marmitex', 'motoca', 'Bigorna', 'Guerra infinita', 'Gesso', 'Esgoto', 'queimadura','mundo com lábios'];
    this.listaDosJaSorteados = [];
  }

  public sort() {
    if (this.list.length > 0) {
      const random = Math.floor(Math.random() * this.list.length);
      this.word = this.list[random];
    }
    else {
      this.word = 'Acaboooou!';
    }

    this.adicionarPalavraSorteadaNaListaDasQueJaForam();
    this.removerPalavraSorteada();
  }

  private adicionarPalavraSorteadaNaListaDasQueJaForam() {
    this.listaDosJaSorteados.push(this.word);
  }

  private removerPalavraSorteada() {
    const index: number = this.list.indexOf(this.word);
    this.list.splice(index, 1);
  }
}
