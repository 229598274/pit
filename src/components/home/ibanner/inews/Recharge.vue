<template>
    <div>
        <div class="charge_t">
            话费充值<div class="ch_t_icon"></div>
        </div>
        <form>
            <table border="0" style="width:205px; margin-top:10px;" cellspacing="0" cellpadding="0">
                <tr height="35">
                    <td width="33">号码</td>
                    <td><input type="text" value="" class="c_ipt" /></td>
                </tr>
                <tr height="35">
                    <td>面值</td>
                    <td>
                        <select class="jj" name="city">
                            <option value="0" selected="selected">100元</option>
                            <option value="1">50元</option>
                            <option value="2">30元</option>
                            <option value="3">20元</option>
                            <option value="4">10元</option>
                        </select>
                        <span style="color:#ff4e00; font-size:14px;">￥99.5</span>
                    </td>
                </tr>
                <tr height="35">
                    <td colspan="2"><input type="submit" value="立即充值" class="c_btn" /></td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>

export default {
    name:'Recharge'
}
</script>