function older(par)
    {
        data = ""
        for(var item in par)
        {
            data+=item+"="+par[item]+"&"
        }
        return data
    }
