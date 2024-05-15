import React, { useState } from "react";
import { View, Input, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useEstadoGlobal } from "../hooks/EstadoGlobal";

const AdicionarTarefa: React.FC = () => {
    const [novaTarefa, setNovaTarefa] = useState("");
    const { adicionarTarefa } = useEstadoGlobal();
    const handleAdicionarTarefa = () => {
      if (novaTarefa.trim() !== "") {
        adicionarTarefa(novaTarefa);
        setNovaTarefa("");
      }
    };
    return (
        <View style={{ backgroundColor: '#6EE9AC', paddingVertical: 20, paddingHorizontal: 20, paddingTop: 50 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Input
                        placeholder="Add a task"
                        placeholderTextColor="white"
                        value={novaTarefa}
                        onChangeText={setNovaTarefa}
                        fontSize={14}
                        color="white"
                    />
                </View>
                <IconButton
                    icon={<Ionicons name="add" size={24} color="#F3FFF7" />}
                    colorScheme="light"
                    onPress={handleAdicionarTarefa}
                    style={{ borderRadius: 50, backgroundColor: '#2ECCFA' }}
                />
            </View>
        </View>
    );
};

export default AdicionarTarefa;