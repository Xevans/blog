import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

// Structure for custom cloudinary components // might refactor to a types folder repo
interface CloudinaryProps {
    name: string;
    width: number;
    height: number;
    definitions: string;
}

const CloudinaryImageX: React.FC<CloudinaryProps> = (props) => {

    const {name, width, height, definitions } = props;
    

    const cld = new Cloudinary({ cloud: { cloudName: 'dn9rcml4g' } }); // make into global context and extraxt cld from context
  
    const img = cld
            .image(`blog-pics/${name}`)
            .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
            .quality('auto')
            .resize(auto().gravity(autoGravity()).width(width).height(height)); // Transform the image: auto-crop to square aspect_ratio

    if (width < 1 && height < 1) {
        return (
            <AdvancedImage className={definitions} cldImg={img} alt=""/>
        )
    }
    else {
        return (
            <AdvancedImage className={definitions} cldImg={img} alt="" width={width} height={height}/>
        )
    }
    
}

export default CloudinaryImageX;