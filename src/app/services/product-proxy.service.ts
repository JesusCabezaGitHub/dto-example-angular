import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductProxyService {

  private dataProduct: any[] = [
    {
      id: 1,
      title_product: 'Balon Futbol',
      description_product: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      price_p: 80,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 2,
      title_product: 'Cepillo de dientes mágico',
      description_product: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      price_p: 45,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 3,
      title_product: 'Gaesosa efervecente',
      description_product: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
      price_p: 23,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 4,
      title_product: 'Billetera comestible',
      description_product: "the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero",
      price_p: 450,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 5,
      title_product: 'Aspiradora nasal',
      description_product: "written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      price_p: 230,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 6,
      title_product: 'Guantes de boxeo para jugar futbol',
      description_product: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum'",
      price_p: 450,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 7,
      title_product: 'Carro volador subterraneo',
      description_product: "by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      price_p: 1500,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 8,
      title_product: 'Kit de velas para rezar',
      description_product: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      price_p: 12,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 9,
      title_product: 'Papel para escribir con autoborrado',
      description_product: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      price_p: 230,
      image_pro: '../../assets/img/dados.jpg'
    },
    {
      id: 10,
      title_product: 'Monitor para gamer developer',
      description_product: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      price_p: 2000,
      image_pro: '../../assets/img/dados.jpg'
    }
]

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return of(this.dataProduct).
    pipe(
      delay(1000)
    );
  }

  createProduct(body: any) {
    this.http.post('url', body)
  }
}
