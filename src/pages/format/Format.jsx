import styles from "./Format.module.scss"


export default function Format() {
    return (
        <section id="format" className={styles["format"]}>
            <div>
                <h3>Yarışma Formatı</h3>
                <div>
                    algoComp’26 ön eleme ve final olmak üzere iki etaptan
                    oluşmaktadır.
                    <br />
                    <br />
                    7 Şubat tarihinde düzenlenecek olan ön eleme aşamasında
                    yarışmacıların 12 saatte 10-12 adet algoritma sorusuna çözüm
                    bulmaları gerekmektedir. En kısa sürede en çok puan
                    toplayan 15 takım finalist olmaya hak kazanacaktır.
                    <br />
                    <br />
                    22-23 Şubat 2026 tarihinde düzenlenecek olan final etabında
                    ise yarışmacıların ön eleme etabından daha zorlayıcı 15-25 adet
                    algoritma sorusuna 16 saat içerisinde çözüm bulmaları
                    gerekmektedir. En çok puan toplayan 5 takım büyük ödüllerin
                    sahibi olacaktır.
                </div>
            </div>
            <div>
                <h3>Katılım Kuralları</h3>
                <ul>
                    <li>
                        Başvurular 7 Şubat 2026 tarihine kadar yapılmalıdır,
                        bu tarihten sonra başvuru alınmayacaktır ve yarışmacı
                        kayıtları sonlandırılacaktır.
                    </li>
                    <li>
                        Yarışmaya katılmak isteyenler 2 veya 3 kişilik takımlar
                        halinde ya da bireysel olarak başvuru yapabilirler.
                        Takım halinde katılmak isteyenlerin takım arkadaşları
                        ile birlikte başvuru yapmaları gerekmektedir. Ayrı ayrı
                        başvuru yapan katılımcılar farklı takım sayılacaktır ve
                        takım halinde yarışamayacaklardır.
                    </li>
                    <li>
                        Yarışmaya üniversitede ön lisans/lisans eğitimi alan
                        öğrenciler katılabilir.
                    </li>
                    <li>
                        algoComp'un düzenlenmesinde görev almış öğrenciler
                        yarışmaya katılamamaktadır.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Puanlama ve Sıralama</h3>
                <div>
                    Her çözüm, soru ekibimiz tarafından hazırlanmış belirli
                    testlerden geçirilecektir. Testler sonucunda, takımlar tüm
                    testleri geçtikleri takdirde puan kazanacaktır.
                    <br />
                    <br />
                    Sıralamada öncelikli olarak takımların topladıkları puanlar
                    göz önüne alınacaktır. Birden fazla takımın eşit puan
                    alması durumunda bu puanı daha kısa sürede toplayan takım
                    sıralamada diğerlerinin önüne geçecektir.
                </div>
            </div>
        </section>
    );
}
