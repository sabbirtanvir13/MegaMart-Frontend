
import {
  TextField,
  Button,
  MenuItem,
  Switch,
  FormControlLabel,
  InputAdornment
} from '@mui/material';
import { ImageIcon } from 'lucide-react';
import { MdCloudUpload } from 'react-icons/md';

const AddProductForm = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Add New Product</h2>

      <form className="space-y-6">
        {/* Product Title */}
        <TextField
          fullWidth
          label="Product Title"
          variant="outlined"
          placeholder="e.g. All Natural Italian-Style Chicken Meatballs"
        />

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          {/* Regular Price */}
          <TextField
            fullWidth
            label="Old Price"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          {/* Sale Price */}
          <TextField
            fullWidth
            label="Sale Price"
            type="number"
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </div>

        <div className="grid mt-4  grid-cols-1 md:grid-cols-2 gap-4">
          {/* Discount Percentage */}
          <TextField
            fullWidth
            label="Discount (%)"
            type="number"
            placeholder="e.g. 23"
          />
          {/* Category */}
          <TextField
            fullWidth
            select
            label="Category"
            defaultValue="frozen"
          >
            <MenuItem value="frozen">Frozen Foods</MenuItem>
            <MenuItem value="organic">Organic</MenuItem>
            <MenuItem value="snacks">Snacks & Nuts</MenuItem>
            <MenuItem value="dairy">Dairy & Cheese</MenuItem>
          </TextField>
        </div>

        {/* Image URL/Upload */}
        {/* <TextField
          fullWidth
          label="Product Image URL"
          placeholder="https://example.com/image.png"
          InputProps={{
            endAdornment: <MdCloudUpload className="text-gray-400 text-xl" />,
          }}
        /> */}

        {/* Image Upload */}
        <div className="mb-4 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
            <ImageIcon />
          </span>
          <input
            type="file"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner text-gray-500 file:hidden"
          />
        </div>


        {/* Switches for Badges */}
        <div className="flex flex-wrap gap-6 bg-slate-50 p-4 rounded-lg">
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Mark as Recommended"
          />
          <FormControlLabel
            control={<Switch color="success" />}
            label="Organic Product"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="success" />}
            label="In Stock"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#2b3e9a',
              padding: '12px',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#1e2d70' }
            }}
          >
            Publish Product
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: '#64748b',
              borderColor: '#cbd5e1',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;