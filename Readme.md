# News Feed System Design

## Models
Sistemde 5 farklı model olacak ve bunlar:
  - User
  - Post
  - Like
  - Comment
  - Follow

![Diagram](/DataBaseDiagram.png)

---

## News Feed Design
  - Postlarda score mantığı olacak ve bu şekilde kullanıcının feed kısmında sıralanacak
  - Her kullanıcının ortalama feed başlangıç puanı (FBP) olacak.
  - FBP altında olanlar feed altında olacak, üstünde olanlar feed'de üst sırada olacaklar.
  - Her postun kendı score olacak ve bunlar belli başlı işlemlerler değişecekler ve bu puana göre feed'de sıralanacaklar.

- ### Post Score Hesaplama
  - Postun aldığı like veya comment sayısının alıp belli bir ağırlık kat sayısı ile çarparsak bu bize postun aldığı action ağrılığını verir.
  

   ```shell
    W_action = (LIKEPOINT * LikeCount + COMMENTPOINT * CommentCount)
    ```

  - Eğerki başlangıçta bir postun herhangi bir action alma durumu yoksa (yani başlangıçta W_action = 0) her bir post için başlangıç puanı atanır.
  - Atanan bu puan ortalama bir post referans (10 Like/Comment) alınarak yapılır.
  - Postun paylaşma zamanı arttıkça Score azalır.
  - Eğerki kullanıcının takip ettiği kişi "Like/Comment" yaptıysa o kişi için postscore değişir.
  ```shell
  W_following = (FOLLOWINGPOINT * followingCount)
  ```
  - FinalScore ise bunlar toplamı post yaşına bölünmesi ile bulunur
    * Age: Post yaşı
    * 1.1 olmasının sebebi postun yaşlanmasını sağlayan üstel kuvvet

  Ve FinalScore hesaplama formulu:
  ```shell 
    W_final = (W_action + W_following) / (Age+2)^1.1
  ```

- ### Feed Başlangıç Puanı Hesaplama
  - Kullanıcının feede düşmesi beklenen postlar alınır ve bunların medianı alınır ve bu FBP olur. 
  - FBP altında kalanlar feed altında kalır, üstünde olanlarsa feed üstünde olur.
