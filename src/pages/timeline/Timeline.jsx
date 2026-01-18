import { Header, ListItem } from "./components"
import styles from "./Timeline.module.scss"


export default function Timeline() {
    return (
        <section id="timeline" className={styles['timeline']}>
            <h2>Zaman Çizelgesi</h2>
            <Header>Kayıtlar</Header>
            <ListItem time="7 Şubat 11.30">
                algoComp'26 için son başvuru tarihi.
            </ListItem>
            <Header>Ön eleme süreci</Header>
            <ListItem time="7 Şubat 10.00">
                Kick-off ve practice session.
            </ListItem>
            <ListItem time="7 Şubat 12.00 - 23.59">
                Online ön eleme etabı.
            </ListItem>
            <ListItem time="14 Şubat">
                Resmî ön eleme sonuçlarının açıklanması.
            </ListItem>
            <Header>Final süreci</Header>
            <ListItem time="22 Kasım 20.00 - 23 Kasım 12.00 ">
                ITU Ayazağa kampüsünde yüz yüze final etabı.
            </ListItem>
            <Header>Son</Header>
        </section>
    );
}
