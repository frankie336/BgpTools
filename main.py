from flask import Flask, redirect, url_for, request, render_template
import requests
import json
from collections import namedtuple  
import ipaddress
from ipaddress import ip_network, IPv4Network
import time 

app = Flask(__name__)




class Controller:

    
    def __init__(self):

        
        from longlists import class_subs,subnet_bits,subnet_len,max_subnets,hosts_persub
        self.subnet_bits = subnet_bits
        self.tools_links = ['/calc']
        self.class_subs = class_subs
        self.subnet_len = subnet_len
        self.max_subnets = max_subnets
        self.hosts_persub = hosts_persub
        self.max_subnets = max_subnets


    def ProcessIp(self,ip,subnet):

        errors = ['IP address format error']
  
        try:
           ipnet = ipaddress.ip_network(ip+'/'+subnet, strict=False)
        except ValueError as e:
          wild_card_mask = errors[0]
          subnetid =  errors[0]
          broadcast_address =  errors[0]
          dottedhex =  errors[0]
          return wild_card_mask,subnetid,broadcast_address,dottedhex
        else:
          pass 

        
        """
        Get the wildcardmask
        """
        wild_card_mask= ipnet.hostmask
        """
        Get the subnet ID
        """
        subnetid = ipnet.network_address
        """
        Get the broadcast address
        """
        broadcast_address  = ipnet.broadcast_address
        
        """
        Get the Hex Format
        of the IP address 
        """
        prefix_split = str(ip).split('.')
        fullhex = "".join([hex(int(value))[2:].zfill(2) for value in prefix_split])
        dottedhex = (fullhex[0:2])+'.'+(fullhex[2:4])+'.'+(fullhex[4:6])+'.'+(fullhex[6:8])

        return wild_card_mask,subnetid,broadcast_address,dottedhex

    
        
    

    
    app.add_url_rule('/', 'index', lambda: controller.index()) 
    def index(self):
         
         return render_template('index.html',tools_links=self.tools_links)


    

    app.add_url_rule('/calc', 'calc', lambda: controller.subnetcalc(),methods=['POST','GET'])
    def subnetcalc(self):



          
          default_hex = '0.0.0.0'
          dottedhex = 'c0.a8.00.01'
          wild_card_mask = '0.0.0.255'
          radio_select = 'radioButton3'
          default_prefix = '192.168.1.1'
          subnetin = '255.255.255.0'##used
          subnet_back = '0.0.0.0'##used
          bits_back = self.subnet_bits[:7]##used
          mask_back = self.subnet_len[16:]##used
          subnetid = '192.168.1.0'#used
          broadcast_address = '192.168.1.255'#used
          subitsin = '0'#used
          maskbitsin = '24'#used
          max_subs = self.max_subnets[:7] 
          max_hostsin ='254'#used
          max_subsin = '1'#used
          hosts_persub = self.hosts_persub[15:]





        
          if request.method == "POST":

            rad_select = request.form['radioButton']#The passed value ip class radio selection

            prefixin = request.form.get("prefix")#The user input IP Address
            subnetin = request.form.get("subnetout")
            subitsin = request.form.get("ipclassbits")
            maskbitsin = request.form.get("maskbits")
            max_hostsin = request.form.get("hostspersub")
            max_subsin = request.form.get("maxsubnets")

            wild_card_mask,subnetid,broadcast_address,dottedhex=self.ProcessIp(prefixin,subnetin)


          if rad_select =='1':
                
                default_prefix = prefixin
                radio_select = 'radioButton1'
                subnet_back = self.class_subs
                bits_back = self.subnet_bits
                mask_back = self.subnet_len
                max_subs = self.max_subnets
                hosts_persub = self.hosts_persub

                wild_card_mask,subnetid,broadcast_address,dottedhex=self.ProcessIp(prefixin,subnetin)
          

          if rad_select =='2':
             
                default_prefix = prefixin
                radio_select = 'radioButton2'
                subnet_back = self.class_subs[8:]
                bits_back = self.subnet_bits[:15]
                mask_back = self.subnet_len[8:]
                max_subs = self.max_subnets[:15]
                hosts_persub = self.hosts_persub[7:]

                wild_card_mask,subnetid,broadcast_address,dottedhex=self.ProcessIp(prefixin,subnetin)
            


            
          if rad_select =='3':
             
                default_prefix = prefixin
                radio_select = 'radioButton3'
                subnet_back = self.class_subs[16:]
                bits_back = self.subnet_bits[:7]
                mask_back = self.subnet_len[16:]
                max_subs = self.max_subnets[:7]
                hosts_persub = self.hosts_persub[15:]

                wild_card_mask,subnetid,broadcast_address,dottedhex=self.ProcessIp(prefixin,subnetin)
           



            
        

          """
          1. class_subs - All possible Subnets
          2. subnet_bits - All possible subnet bits
          3. wild_card_mask - Pyhton processed wildcard mask
          4. dottedhex - Pyhton processed Hex format of input IP address
          5. default_prefix - The default prefix vlaue: see id="prefix" in .html
          6. radio_select - current user radio button selection for ipv4 class
          7. subnet_back - Sets the vlaues of the subnet select options: see id='subnetout' in .html
          8. bits_back - Sets the vlaues of the Subnet Bits select options: see id="ipclassbits" in .html
          9. subnet_len - Sets the values of the Mask Bits select options: see var class_mask* in .html and .js
          10. mask_back  - Sets the values for the Mask Bits select options: see id="maskbits" in .html
          11. subnetid - Pyhton Processed subnet ID of prefix 
          12. broadcast_address - 
          13. subnetin -
          14. subitsin -
          15. max_subs -
          16. hosts_persub -
          17. max_hostsin -
          18. max_subsin -
          """
          return render_template('calc.html',class_subs=self.class_subs,
                                 subnet_bits=self.subnet_bits,
                                 wild_card_mask=wild_card_mask,
                                 dottedhex=dottedhex,
                                 default_prefix=default_prefix,
                                 radio_select=radio_select,
                                 subnet_back=subnet_back,
                                 bits_back=bits_back,
                                 subnet_len = self.subnet_len,
                                 mask_back=mask_back,
                                 subnetid=subnetid,
                                 broadcast_address = broadcast_address,
                                 subnetin = subnetin ,
                                 subitsin = subitsin,
                                 maskbitsin = maskbitsin,
                                 max_subs = max_subs,
                                 hosts_persub=hosts_persub,
                                 max_hostsin = max_hostsin,
                                 max_subsin=max_subsin
                                 )
    
    
    
    app.add_url_rule('/test', 'test', lambda: controller.testpage(),methods=['POST','GET'])
    def testpage(self):
        if request.method == "POST":
          todo = request.form.get("todo") 
         

        return render_template('testjs.html')

    
   


controller = Controller()

if __name__ == "__main__":
    app.run(debug=True)
    a = Controller()