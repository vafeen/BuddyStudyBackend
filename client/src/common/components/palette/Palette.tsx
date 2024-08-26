import { PaletteInput, PaletteLabel, PaletteWrapper } from './styles';

interface PaletteProps {
    colorHeader: string,
    setColorHeader: (arg: string) => void
}

export default function Palette({colorHeader, setColorHeader}: PaletteProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColorHeader(e.target.value);
    }
    
    return (
        <PaletteWrapper>
            <PaletteLabel htmlFor='color'>Выберите цвет фона у заголовка: </PaletteLabel>
            <PaletteInput id='color' name='color' value={colorHeader} onChange={handleChange} type='color' />
        </PaletteWrapper>
    )
}
