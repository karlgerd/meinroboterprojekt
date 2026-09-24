//% color="#e63022" icon="\uf085" block="Nezha Pro"
namespace NezhaPro {

    export enum Motor {
        //% block="M1"
        M1 = 1,
        //% block="M2"
        M2 = 2,
        //% block="M3"
        M3 = 3,
        //% block="M4"
        M4 = 4
    }

    //% block="Setze Motor %motor auf Geschwindigkeit %speed"
    //% speed.min=-100 speed.max=100
    //% blockId=nezha_set_motor_speed
    export function setMotorSpeed(motor: Motor, speed: number): void {
        let clampedSpeed = Math.max(-100, Math.min(100, speed));

        // Vorbereitung für I2C-Kommunikation des Nezha Pro V2
        // Die genaue I2C-Adresse (z. B. 0x10) und die Register müssen dem Datenblatt entnommen werden.
        /*
        let buf = pins.createBuffer(4);
        buf[0] = 0x00; // Register für Motorsteuerung (Platzhalter)
        buf[1] = motor;
        buf[2] = clampedSpeed >= 0 ? 1 : 2; // Richtung
        buf[3] = Math.abs(clampedSpeed); // Geschwindigkeit
        pins.i2cWriteBuffer(0x10, buf); // 0x10 als beispielhafte I2C Adresse
        */
    }
}
//Testkommentar: Dies ist ein Testkommentar, um die Funktionalität der Code-Blocks zu überprüfen.