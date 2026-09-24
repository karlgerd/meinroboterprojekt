//% color="#e63022" icon="\uf085" block="Nezha Pro" blockId="nezhapro"

namespace NezhaPro {
    const NEZHA_ADDRESS = 0x10;

    export enum Motor {
        //% block="M1"
        M1,
        //% block="M2"
        M2,
        //% block="M3"
        M3,
        //% block="M4"
        M4
    }

    function clampSpeed(speed: number): number {
        if (speed > 100) return 100;
        if (speed < -100) return -100;
        return speed;
    }

    //% block="setze Motor %motor auf Geschwindigkeit %speed %"
    //% blockId=nezha_set_motor_speed
    //% weight=100
    //% subcategory="Motor"
    //% speed.min=-100 speed.max=100
    export function setMotorSpeed(motor: Motor, speed: number): void {
        const clampedSpeed = clampSpeed(speed);
        const buf = pins.createBuffer(4);

        switch (motor) {
            case Motor.M1:
                buf[0] = 0x01;
                break;
            case Motor.M2:
                buf[0] = 0x02;
                break;
            case Motor.M3:
                buf[0] = 0x03;
                break;
            case Motor.M4:
                buf[0] = 0x04;
                break;
            default:
                return;
        }

        if (clampedSpeed >= 0) {
            buf[1] = 0x01;
        } else {
            buf[1] = 0x02;
            buf[2] = Math.abs(clampedSpeed);
            buf[3] = 0;
            pins.i2cWriteBuffer(NEZHA_ADDRESS, buf);
            return;
        }

        buf[2] = clampedSpeed;
        buf[3] = 0;
        pins.i2cWriteBuffer(NEZHA_ADDRESS, buf);
    }

    //% block="stoppe Motor %motor"
    //% blockId=nezha_stop_motor
    //% weight=95
    //% subcategory="Motor"
    export function stopMotor(motor: Motor): void {
        setMotorSpeed(motor, 0);
    }
}

