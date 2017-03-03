/*   Ordt 170131.02 autogenerated file 
 *   Input: ./rdl_sec_if/test.rdl
 *   Parms: ./rdl_sec_if/test.parms
 *   Date: Tue Jan 31 16:04:28 EST 2017
 */

register_set base_map "L1 regs" {

  address = 0x0;
  register_width = 32;
  register_set base_regs "base_regs register_set" {
    address = 0x0;
    
    register config_regs "Config reg set  config_regs" {
      address = 0x0;
      category = { DYNAMIC_CONFIG };
      repeat = 8;
      integer msb_field[16] "Bunch o msb bits" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "Bunch o lsb bits" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x20;
  };
  
  register_set primary "L2 regs" {
    address = 0x20;
    
    register_set base_regs "base_regs register_set" {
      address = 0x0;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        category = { DYNAMIC_CONFIG };
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x20;
    };
    
    register_set_size = 0x20;
  };
  
  register_set_size = 0x40;
};
