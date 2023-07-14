import styles from "./KeyboardBanner.module.css";
export default function KeyboardBanner() {
  return (
    <div className={styles.keyboardBanner}>
      <h1>KEYBOARDS</h1>
      <img
        src="https://cdn.vox-cdn.com/thumbor/PO7begyp5EdFFK8BSjlYAfCMNd0=/0x0:3000x2000/3000x2000/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23610295/VRG_ILLO_5272_Mech_Keyboard_Buying_Guide.jpg"
        alt=""
      />
    </div>
  );
}
