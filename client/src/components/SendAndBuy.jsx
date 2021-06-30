import React from 'react'
import "./style/sendAndBuy.css"

function SendAndBuy() {
    return (
        <div>
            <h3>Pengiriman dan Pembayaran</h3>
            <div className="form">
                <form>
                    <div className="form-address">
                        <label htmlFor="address">Alamat</label>
                        <input id="address" type="text" /> 
                    </div>
                    <div className="form-courier">
                        <div className="form-send">
                            <p>Pilih Pengiriman</p>
                            <select name="" id="">
                                <option value="">Reguler</option>
                                <option value="">Instan</option>
                                <option value="">Same Day</option>
                                <option value="">Kargo</option>
                            </select>
                        </div>
                        <div className="form-send">
                            <p>Pilih Kurir</p>
                            <select name="" id="">
                                <option value="">SiCepat</option>
                                <option value="">J&T</option>
                                <option value="">JNE</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendAndBuy
