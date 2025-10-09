import { Header, ListItem } from "./components"
import styles from "./Timeline.module.scss"


export default function Timeline() {
    return (
        <section id="timeline" className={styles['timeline']}>
            <h2>Zaman Çizelgesi</h2>
            <Header>Kayıtlar</Header>
            <ListItem time="25 Ekim 11.30">
                algoComp'25 için son başvuru tarihi.
            </ListItem>
            <Header>Ön eleme süreci</Header>
            <ListItem time="25 Ekim 10.00">
                Kick-off ve practice session.
            </ListItem>
            <ListItem time="25 Ekim 12.00 - 23.59">
                Online ön eleme etabı.
            </ListItem>
            <ListItem time="1 Kasım">
                Resmî ön eleme sonuçlarının açıklanması.
            </ListItem>
            <Header>Final süreci</Header>
            <ListItem time="15 Kasım 18.00 - 16 Kasım 10.00 ">
                Yüz yüze final etabı.
            </ListItem>
            <Header>Son</Header>
        </section>
    );
}
