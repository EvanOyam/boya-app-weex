package com.weex.app;

import com.taobao.weex.annotation.JSMethod;
import com.weex.app.WXPageActivity;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.google.zxing.integration.android.IntentIntegrator;

public class ScanModule extends WXModule {
    @JSMethod(uiThread = true)
    public void scanCode(JSCallback callback) {
        WXPageActivity act=(WXPageActivity)mWXSDKInstance.getContext();
        act.setOnScanFinishCallback(callback);

        IntentIntegrator integrator = new IntentIntegrator(act);
        integrator.initiateScan();
    }
}
